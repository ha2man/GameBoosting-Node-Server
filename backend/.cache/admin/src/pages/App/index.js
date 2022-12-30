/**
 *
 * App.js
 *
 */

import React, { useEffect, useState, useMemo, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  LoadingIndicatorPage,
  auth,
  request,
  useNotification,
  TrackingProvider,
  prefixFileUrlWithBackendUrl,
  useAppInfos,
} from '@strapi/helper-plugin';
import axios from 'axios';
import { SkipToContent } from '@strapi/design-system/Main';
import { useIntl } from 'react-intl';
import PrivateRoute from '../../components/PrivateRoute';
import { createRoute, makeUniqueRoutes } from '../../utils';
import AuthPage from '../AuthPage';
import NotFoundPage from '../NotFoundPage';
import UseCasePage from '../UseCasePage';
import { getUID } from './utils';
import routes from './utils/routes';
import { useConfigurations, useFetchClient } from '../../hooks';

const AuthenticatedApp = lazy(() =>
  import(/* webpackChunkName: "Admin-authenticatedApp" */ '../../components/AuthenticatedApp')
);

function App() {
  const toggleNotification = useNotification();
  const { updateProjectSettings } = useConfigurations();
  const { formatMessage } = useIntl();
  const [{ isLoading, hasAdmin, uuid, deviceId }, setState] = useState({
    isLoading: true,
    hasAdmin: false,
  });
  const appInfo = useAppInfos();
  const { get } = useFetchClient();

  const authRoutes = useMemo(() => {
    return makeUniqueRoutes(
      routes.map(({ to, Component, exact }) => createRoute(Component, to, exact))
    );
  }, []);

  const [telemetryProperties, setTelemetryProperties] = useState(null);

  useEffect(() => {
    const currentToken = auth.getToken();

    const renewToken = async () => {
      try {
        const {
          data: { token },
        } = await request('/admin/renew-token', {
          method: 'POST',
          body: { token: currentToken },
        });
        auth.updateToken(token);
      } catch (err) {
        // Refresh app
        auth.clearAppStorage();
        window.location.reload();
      }
    };

    if (currentToken) {
      renewToken();
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: {
            data: { hasAdmin, uuid, menuLogo },
          },
        } = await axios.get(`${strapi.backendURL}/admin/init`);

        updateProjectSettings({ menuLogo: prefixFileUrlWithBackendUrl(menuLogo) });
        const deviceId = await getUID();

        if (uuid) {
          const {
            data: { data: properties },
          } = await get(`/admin/telemetry-properties`, {
            // NOTE: needed because the interceptors of the fetchClient redirect to /login when receive a 401 and it would end up in an infinite loop when the user doesn't have a session.
            validateStatus: (status) => status < 500,
          });

          setTelemetryProperties(properties);

          try {
            await fetch('https://analytics.strapi.io/api/v2/track', {
              method: 'POST',
              body: JSON.stringify({
                // This event is anonymous
                event: 'didInitializeAdministration',
                userId: '',
                deviceId,
                eventPropeties: {},
                userProperties: { environment: appInfo.currentEnvironment },
                groupProperties: { ...properties, projectId: uuid },
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            });
          } catch (e) {
            // Silent.
          }
        }

        setState({ isLoading: false, hasAdmin, uuid, deviceId });
      } catch (err) {
        toggleNotification({
          type: 'warning',
          message: { id: 'app.containers.App.notification.error.init' },
        });
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleNotification, updateProjectSettings]);

  const setHasAdmin = (hasAdmin) => setState((prev) => ({ ...prev, hasAdmin }));

  const trackingInfo = useMemo(
    () => ({
      uuid,
      telemetryProperties,
      deviceId,
    }),
    [uuid, telemetryProperties, deviceId]
  );

  if (isLoading) {
    return <LoadingIndicatorPage />;
  }

  return (
    <Suspense fallback={<LoadingIndicatorPage />}>
      <SkipToContent>{formatMessage({ id: 'skipToContent' })}</SkipToContent>
      <TrackingProvider value={trackingInfo}>
        <Switch>
          {authRoutes}
          <Route
            path="/auth/:authType"
            render={(routerProps) => (
              <AuthPage {...routerProps} setHasAdmin={setHasAdmin} hasAdmin={hasAdmin} />
            )}
            exact
          />
          <PrivateRoute path="/usecase" component={UseCasePage} />
          <PrivateRoute path="/" component={AuthenticatedApp} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </TrackingProvider>
    </Suspense>
  );
}

export default App;
