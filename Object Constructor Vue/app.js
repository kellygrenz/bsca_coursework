
function Resort  (name, location, lifts, img){
    this.name = name
    this.location = location
    this.lifts = lifts
    this.img = img
}

const skiResorts = []


const bigSky = new Resort('Big Sky Resort', 'Big Sky, MT', '30', 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/4778175/1383237084jpg_render.0.jpg')
const hyland = new Resort('Hyland Hills', 'Minneapolis, MN', '4', 'https://res.cloudinary.com/liftopia/image/upload/c_fit,d_default_logo_1.png,f_auto,h_980,q_auto,w_980/v1/production/trail_maps/4a40f0e428875410e6a14b470c075b5a')
const greatDivide = new Resort('Great Divide', 'Helena, MT', '4', 'http://skigd.com/wp-content/uploads/2016/11/GreatDividetrailmap-1024x511.jpg')

skiResorts.push('hyland', 'greatDivide', 'bigSky')

console.log(skiResorts)


const resortVue = {
    el: "#resort-app",
    data: {
        title: 'My Favorite Places to Ski',
        resort: resort,
        newResortName: '',
        newResortLocation: '',
        newResortLifts: '',
        newResortImg: ''
    },

}

new Vue(resortVue)







