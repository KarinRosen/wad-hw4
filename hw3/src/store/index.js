import { createStore } from 'vuex';

export default createStore({
  strict: true,
  state: {
 
      posts: [
        { id: 1, userId: 1, profilePic: "https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png", id: 1, body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod nec neque non feugiat. Cras suscipit turpis sit amet lacus malesuada, in congue tortor hendrerit.", createTime: "2023-11-02T10:00:00", img: "https://i.insider.com/5d49f60636e03c268c7494d2?width=938&format=jpeg", likes: 0 },
        { id: 2, userId: 1, profilePic: "https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png", id: 2, body: "Pellentesque et tristique libero. Nulla facilisi. Integer id elit id massa fringilla gravida a quis turpis.", createTime: "2023-11-02T11:15:00", img: "https://upload.wikimedia.org/wikipedia/commons/d/de/Nokota_Horses_cropped.jpg", likes: 0 },
        { id: 3, userId: 1, profilePic: "https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png", id: 3, body: "Duis vestibulum ligula eget ipsum tristique, id gravida ligula efficitur. Nunc ut nulla at odio convallis cursus.", createTime: "2023-11-02T12:30:00", img: "https://visittartu.com/sites/default/files/RagnarVutt_tartu-raekoja-plats.jpg", likes: 0 },
        { id: 4, userId: 1, profilePic: "https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png", id: 4, body: "Halloween on täies hoos.", createTime: "2023-11-02T13:45:00", img: "https://hips.hearstapps.com/hmg-prod/images/halloween-pumpkins-royalty-free-image-1688047405.jpg?crop=1.00xw:0.716xh;0,0.259xh&resize=1200:*", likes: 0 },
        { id: 5, userId: 1, profilePic: "https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png", id: 5, body: "Meie nunnu koer", createTime: "2023-11-02T15:00:00", img: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" , likes: 0 },
        { id: 6, userId: 1, profilePic: "https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png", id: 6, body: "Vestibulum ultrices purus at quam consectetur, vel facilisis elit ultricies. Aliquam ac augue et tellus cursus aliquam. Curabitur nec diam eu arcu eleifend hendrerit.", createTime: "2023-11-02T16:15:00", img: "https://media.istockphoto.com/id/1400392188/video/confetti-with-alpha-luma-matte-channel.jpg?s=640x640&k=20&c=2idLGsdjEBiZp61e32iwVNJCReqrpiTINE_o61Ev36c=",likes: 0  },
        { id: 7, userId: 1, profilePic: "https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png", id: 7, body: "Phasellus sagittis viverra erat, non tincidunt metus sagittis nec. Fusce ac nisi in quam fringilla condimentum. Sed et metus tincidunt, tincidunt nulla vel, tincidunt odio.", createTime: "2023-11-02T17:30:00", img: "https://www.thespruce.com/thmb/ieMHZ8S8suBJ4KgAnbABLzYM4Y4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1421627943-201049545306435f831fdc01da4327eb.jpg",likes: 0  },
        { id: 8, userId: 1, profilePic: "https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png", id: 8, body: "Proin in mi ut justo laoreet auctor. Donec at odio at neque feugiat tristique. Sed eu tincidunt metus.", createTime: "2023-11-02T18:45:00", img: "https://static.visitestonia.com/images/3607551/1600_900_false_false_4941402b8183ff16cd5dfff9f2d6cb0f.jpg", likes: 0  },
        { id: 9, userId: 1, profilePic: "https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png", id: 9, body: "Morbi viverra nulla a vestibulum. Sed euismod bibendum est, sit amet bibendum ligula tincidunt sit amet. Suspendisse eleifend scelerisque ligula id egestas.", createTime: "2023-11-02T20:00:00", img: "https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg", likes: 0 },
        { id: 10, userId: 1, profilePic: "https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png", id: 10, body: "Bird.", createTime: "2023-11-02T20:00:00", img: "https://pics.clipartpng.com/midle/Yellow_Bird_PNG_Clipart-72.png", likes: 0 }
    
      ]
      
  },
  getters: {
    posts: (state) => state.posts,
  },
  mutations: {
    likePost(state, postId) {
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.likes++;
      }
    },
    resetLikes(state, postId) {
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.likes == 0;
      }
    },
  },

  actions: {
    likePost({ commit }, postId) {
      commit('likePost', postId);
    },
  },
  modules: {},
});

