Page({
    data:{
        longitude: 113.324520,
        latitude: 23.099994,
        markers:[{
            id: 0,
            iconPath: "address.png",
            latitude: 23.099994,
            longitude: 113.324520,
            width: 50,
            height: 50
        }],
        circles:{
            latitude:121.54409,
            longitude:31.22114,
            radius:10
        },
        locationInfo:""
    },
    onLoad: function(){
        var that = this;
        wx.getLocation({
            type: "wgs84",
            success: function(res){
                console.log(res)
                var latitude = res.latitude;
                var longitude = res.longitude;
                //console.log(res.latitude);
                that.setData({
                    circles:that.data.circles,
                    latitude: res.latitude,
                    longitude: res.longitude,
                    markers:[{
                        latitude: res.latitude,
                        longitude: res.longitude
                    }]
                })
                that.getAddressInfo(res.latitude,res.longitude)

            }
        })
    },
    getAddressInfo(latitude,longitude){
        var that=this;
        var getAddressUrl = "https://apis.map.qq.com/ws/geocoder/v1/?location=" + latitude + "," + longitude + "&key=TSSBZ-LBHRW-XNCRG-OLKDR-MNIN3-OHBQG";
        wx.request({
            url:getAddressUrl,
            success(res){
                let locationInfo=res.data.result.address;
                that.setData({
                    locationInfo:locationInfo
                })
            }
        })

    },
    getCurLocation(e){
        console.log(e.detail)
        let location=e.detail;
        this.getAddressInfo(location.latitude,location.longitude)


    },
    onReady: function(){

    }
})