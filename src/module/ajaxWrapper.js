import axios from 'axios'
const ajaxWrapper = (ajaxUrl, methodType, successFunction, param) => {
  this.$http = axios

  const AJAX = this.$http[methodType]
  AJAX(ajaxUrl, {
    params: param
  }).then(response => {
    successFunction(response)
  })
}

export default ajaxWrapper
