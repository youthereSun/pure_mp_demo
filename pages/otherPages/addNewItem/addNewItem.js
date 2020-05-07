Page({
    data: {
        fileList: []

    },
    onShow() {
        this.setData({
            fileList: this.data.fileList
        })
    },
    //文件上传完毕后会触发after-read回调函数，获取到对应的文件的临时地址，然后再使用wx.uploadFile将图片上传到远程服务器上
    afterRead(e) {
        //获取对象
        const {file} = e.detail;
        const list = this.data.fileList;
        //拼接新对象
        let object = {};
        object.url = file.path;
        object.name = "file"
        //追加对象
        list.push(object)
        //推送view
        this.setData({
            fileList: list
        })
    },
    delete(e) {
        let index = e.detail.index;
        //let list =this.data.fileList 引用赋值，会造成数据混乱
        let list = [].concat(this.data.fileList);
        list.splice(index,1)
        this.setData({
            fileList:list
        })
    }


});
