import React from 'react'
import Lottie from 'lottie-react'

import LoadingLottie from './assets/loading.json'

function LoadingSpinner() {
  // place div in the middle of the page
  return (
    <div >
      <Lottie animationData={LoadingLottie} />
    </div>
  )
}

export default LoadingSpinner
