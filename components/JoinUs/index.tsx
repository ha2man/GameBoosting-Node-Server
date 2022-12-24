import React, { FunctionComponent, useState } from 'react'
import TextField from '@mui/joy/TextField'
import Modal from '@mui/joy/Modal'
import ModalDialog from '@mui/joy/ModalDialog'
import ModalClose from '@mui/joy/ModalClose'
import Stack from '@mui/joy/Stack'
import EmailIcon from '@mui/icons-material/Email'
import LockIcon from '@mui/icons-material/Lock'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PublicIcon from '@mui/icons-material/Public'

export interface JoinUsModal {
  open: boolean
  closeJoinUs: () => void
}

const SignUp: FunctionComponent<JoinUsModal> = ({ open, closeJoinUs }) => {
  return (
    <>
      <Modal open={open} onClose={closeJoinUs}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          className="w-1/3 bg-gray-200"
        >
          <ModalClose />
          <p className="text-center text-5xl font-bold leading-10 my-10 px-8">
            You Would Like To Join Us
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              closeJoinUs()
            }}
          >
            <div className="flex justify-center space-x-4">
              <div className="rounded-lg border-2 py-8 grid justify-items-center w-1/2">
                <svg
                  width="101"
                  height="101"
                  viewBox="0 0 101 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50.5"
                    cy="50.5"
                    r="50.5"
                    fill="#5051F9"
                    fill-opacity="0.05"
                  />
                  <path
                    d="M65.0162 39.3962C64.8325 39.37 64.6487 39.37 64.465 39.3962C60.3962 39.265 57.1675 35.9312 57.1675 31.8362C57.1675 27.6625 60.5537 24.25 64.7537 24.25C68.9275 24.25 72.34 27.6362 72.34 31.8362C72.3137 35.9312 69.085 39.265 65.0162 39.3962Z"
                    fill="#6A6BFF"
                  />
                  <path
                    d="M73.5737 57.5875C70.6337 59.5562 66.5124 60.2912 62.7062 59.7925C63.7037 57.64 64.2287 55.2512 64.2549 52.7312C64.2549 50.1062 63.6775 47.6125 62.575 45.4337C66.46 44.9087 70.5812 45.6437 73.5475 47.6125C77.695 50.3425 77.695 54.8312 73.5737 57.5875Z"
                    fill="#6A6BFF"
                  />
                  <path
                    d="M35.9049 39.3962C36.0887 39.37 36.2724 39.37 36.4562 39.3962C40.5249 39.265 43.7537 35.9312 43.7537 31.8362C43.7537 27.6362 40.3674 24.25 36.1674 24.25C31.9937 24.25 28.6074 27.6362 28.6074 31.8362C28.6074 35.9312 31.8362 39.265 35.9049 39.3962Z"
                    fill="#6A6BFF"
                  />
                  <path
                    d="M36.1937 52.7312C36.1937 55.2775 36.7449 57.6925 37.7424 59.8712C34.0412 60.265 30.1824 59.4775 27.3474 57.6137C23.1999 54.8575 23.1999 50.3687 27.3474 47.6125C30.1562 45.7225 34.1199 44.9612 37.8474 45.3812C36.7712 47.5862 36.1937 50.08 36.1937 52.7312Z"
                    fill="#6A6BFF"
                  />
                  <path
                    d="M50.8151 60.6587C50.6051 60.6325 50.3688 60.6325 50.1326 60.6587C45.3026 60.5012 41.4438 56.5375 41.4438 51.655C41.4701 46.6675 45.4863 42.625 50.5001 42.625C55.4876 42.625 59.5301 46.6675 59.5301 51.655C59.5038 56.5375 55.6713 60.5012 50.8151 60.6587Z"
                    fill="#6A6BFF"
                  />
                  <path
                    d="M42.2838 66.0925C38.3201 68.7437 38.3201 73.1012 42.2838 75.7262C46.7988 78.745 54.2014 78.745 58.7164 75.7262C62.6801 73.075 62.6801 68.7175 58.7164 66.0925C54.2276 63.0737 46.8251 63.0737 42.2838 66.0925Z"
                    fill="#6A6BFF"
                  />
                </svg>
                <p className="text-3xl font-bold mt-8">As A Client</p>
              </div>
              <div className="rounded-lg border-2 py-8 grid justify-items-center w-1/2">
                <svg
                  width="101"
                  height="101"
                  viewBox="0 0 101 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50.5"
                    cy="50.5"
                    r="50.5"
                    fill="#5051F9"
                    fill-opacity="0.05"
                  />
                  <path
                    d="M74.3612 37.3225C72.13 34.855 68.4025 33.6212 62.995 33.6212H62.365V33.5162C62.365 29.1062 62.365 23.6462 52.495 23.6462H48.505C38.635 23.6462 38.635 29.1325 38.635 33.5162V33.6475H38.005C32.5712 33.6475 28.87 34.8812 26.6387 37.3487C24.04 40.2362 24.1187 44.1212 24.3812 46.7725L24.4075 46.9562L24.6474 49.4758C24.6617 49.6255 24.7419 49.7604 24.8674 49.8433C25.3763 50.1793 26.7457 51.0757 27.505 51.4975C27.8725 51.7337 28.2662 51.9437 28.66 52.1537C33.1487 54.6212 38.0837 56.275 43.0975 57.0887C43.3337 59.5562 44.41 62.4437 50.1587 62.4437C55.9075 62.4437 57.0362 59.5825 57.22 57.0362C62.575 56.17 67.7462 54.3062 72.4187 51.5762C72.5762 51.4975 72.6812 51.4187 72.8125 51.34C73.9562 50.6936 75.147 49.8823 76.2064 49.1069C76.3189 49.0246 76.3912 48.8987 76.4066 48.7602L76.4875 48.0325L76.6187 46.7987C76.645 46.6412 76.645 46.51 76.6712 46.3262C76.8812 43.675 76.8287 40.0525 74.3612 37.3225ZM53.3612 55.3037C53.3612 58.0862 53.3612 58.5062 50.1325 58.5062C46.9037 58.5062 46.9037 58.0075 46.9037 55.33V52.0225H53.3612V55.3037ZM42.3887 33.6212V33.5162C42.3887 29.0537 42.3887 27.4 48.505 27.4H52.495C58.6112 27.4 58.6112 29.08 58.6112 33.5162V33.6475H42.3887V33.6212Z"
                    fill="#6A6BFF"
                  />
                  <path
                    d="M75.1101 54.4185C75.4622 54.2472 75.8644 54.5287 75.829 54.9186L74.7551 66.7488C74.2038 71.9988 72.0513 77.3537 60.5013 77.3537H40.4988C28.9488 77.3537 26.7963 71.9988 26.2451 66.775L25.2219 55.5197C25.1868 55.1342 25.5797 54.853 25.931 55.0154C28.3383 56.1288 35.6672 59.4417 39.5809 60.3634C39.7462 60.4023 39.878 60.5194 39.9425 60.6766C41.4466 64.3454 44.9747 66.3025 50.1588 66.3025C55.2916 66.3025 58.8687 64.2702 60.3751 60.598C60.4396 60.4407 60.5713 60.3237 60.7368 60.2848C64.8804 59.3094 72.6126 55.6341 75.1101 54.4185Z"
                    fill="#6A6BFF"
                  />
                </svg>
                <p className="text-3xl font-bold mt-8">As A Freelancer</p>
              </div>
            </div>
            <Stack spacing={4}>
              <button
                type="submit"
                className="bg-main rounded-lg px-8 py-2 text-white text-lg font-bold my-10"
              >
                Confirm
              </button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  )
}

export default SignUp
