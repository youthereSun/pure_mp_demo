Page({
    data:{
        longitude: 113.324520,
        latitude: 23.099994,
        markers:[{
            id: 0,
            iconPath: "my_address.png",
            latitude: 23.099994,
            longitude: 113.324520,
            width: 20,
            height: 20

        }],
        nearbyList:[],
        locationInfo:"",
        search_radius:10000,
        search_keyword:"",
        nearbyListPoints:[]

    },
    onLoad: function(){
        var that = this;
        wx.getLocation({
            type: "gcj02",
            success: function(res){
                that.setData({
                    latitude: res.latitude,
                    longitude: res.longitude,
                    markers:[{
                        latitude: res.latitude,
                        longitude: res.longitude,
                        iconPath: "my_address.png",
                        width: 20,
                        height: 20
                    }]
                })
                that.getAddressInfo(res.latitude,res.longitude)

            }
        })
    },
    getCurLocation(e){
        console.log(e.detail)
        let location=e.detail;
        this.data.markers[0]={
            latitude: location.latitude,
            longitude:location.longitude,
            iconPath: "my_address.png",
            width: 20,
            height: 20
        }
        this.setData({
            latitude:location.latitude,
            longitude:location.longitude,
            markers:this.data.markers
        })
        this.getAddressInfo(location.latitude,location.longitude)
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

    searchNearby(){
        let that =this;
        if(!this.data.search_keyword){
            this.setData({
                modalName:"Modal",
                modal_content:"先输入搜索内容"
            })
            return;
        }
        wx.serviceMarket.invokeService({
            service:"wxc1c68623b7bdea7b",
            api:"poiSearch",
            data:{
                keyword:that.data.search_keyword,
                boundary:"nearby("+that.data.latitude+","+that.data.longitude+","+that.data.search_radius+")"
            }
        }).then(res=>{
            console.log(res)
            let arr=res.data.data
            let arr1=[];
            for (let i=0;i<arr.length;i++){
                let item={
                    iconPath: "other_address.png",
                    width: 20,
                    height: 20,
                };
                item.id=i
                item.longitude=arr[i].location.lng;
                item.latitude=arr[i].location.lat;
                arr1.push(item)
            }
            console.log(arr1)
            this.data.markers=[].concat(this.data.markers[0])
            this.setData({
                nearbyList:arr,
                markers:this.data.markers.concat(arr1)
            })
        }).catch(error=>{
            console.log(error)
        })


    },
    hideModal(){
        this.setData({
            modalName:"",
        })
    },
    setKeyword(e){
        console.log(e)
        let keyword=e.detail.value;
        this.setData({
            search_keyword:keyword
        })
    },
    goThere(e){
        //获取目的位置坐标
      let localtion=  e.currentTarget.dataset.location;
      console.log(localtion)
      let name= e.currentTarget.dataset.title
        let plugin = requirePlugin('routePlan');
        let key="NLPBZ-56F3I-P6EG7-5KBKJ-RHFC2-Z5FXA"
        let referer = 'USUN';   //调用插件的app的名称
        let startPoint=JSON.stringify({
            'name': this.data.locationInfo,
            'latitude':this.data.latitude,
            'longitude': this.data.longitude
        })//起点
        console.log(startPoint)
        let endPoint = JSON.stringify({  //终点
            'name': name,
            'latitude':localtion.lat,
            'longitude': localtion.lng
        });
        wx.navigateTo({
            url: 'plugin://routePlan/index?navigation=1&key=' + key + '&referer=' + referer + '&endPoint=' + endPoint+'&startPoint='+startPoint
        });
    },
    relocate(){
     this.onLoad();

    },
    onReady: function(){

    }
})