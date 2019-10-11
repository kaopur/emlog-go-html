export default {
    getDataJson: function (url, data) {
        var json = null
        let xhr = new XMLHttpRequest()
        xhr.open("GET", "http://localhost:8080/api/navi/rows", true)
        xhr.onreadystatechange = function () {
            // eslint-disable-next-line no-empty
            if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
                json = JSON.parse(xhr.responseText)
                // return json
                // let nav = JSON.parse(xhr.responseText)
                // // eslint-disable-next-line no-console
                // console.log(nav.data)
                // if (nav.error == 0) {
                //     this.navi = nav.data
                // }
            }

        }.bind(this)
        xhr.send()
    }
}