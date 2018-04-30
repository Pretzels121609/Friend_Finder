// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
      Name: "Tigger",
      photo: "http://image.pennlive.com/home/penn-media/width600/img/news/photo/2017/11/13/tiggerpng-2f547746baa63ea8.png" ,
      score: [1, 2, 3, 4, 5, 4, 3, 2, 1, 5]
    },
    {
      Name: "Winnie the Pooh",
      photo: "http://cdn2.momjunction.com/wp-content/uploads/2014/08/Pooh-Bear.jpg" ,
      score: [1, 2, 3, 4, 5, 4, 3, 2, 1, 5]
    },
    {
      Name: "Piglet",
      photo: "https://i.pinimg.com/originals/01/62/75/016275d4cf66da64c66a5be120b4236f.png" ,
      score: [1, 2, 3, 4, 5, 4, 3, 2, 1, 5]
    },
    {
      Name: "Eeyore",
      photo: "https://www.disneyclips.com/imagesnewb/images/clipeeyore2.gif" ,
      score: [1, 2, 3, 4, 5, 4, 3, 2, 1, 5]
    },
    {
      Name: "Roo",
      photo: "https://www.disneyclips.com/imagesnewb2/images/june2519.gif" ,
      score: [1, 2, 3, 4, 5, 4, 3, 2, 1, 5]
    },
    {
      Name: "Rabbit",
      photo: "https://vignette.wikia.nocookie.net/disney/images/7/74/Rabbit-winnie-pooh.jpg/revision/latest?cb=20150104221828" ,
      score: [1, 2, 3, 4, 5, 4, 3, 2, 1, 5]
    },
    {
      Name: "Owl",
      photo: "https://vignette.wikia.nocookie.net/disney/images/8/8e/Owl_WTP.jpg/revision/latest?cb=20151016015510" ,
      score: [1, 2, 3, 4, 5, 4, 3, 2, 1, 5]
    },
    {
      Name: "Kanga",
      photo: "http://www.gifsanimes.fr/animaux/animaux-gifs/kangourou/kangourou-gifs-animes-9420151.gif" ,
      score: [1, 2, 3, 4, 5, 4, 3, 2, 1, 5]
    },
    {
      Name: "Gopher",
      photo: "https://i.pinimg.com/originals/65/bc/3a/65bc3ab0b02d7476ba8a21b4acdac241.gif" ,
      score: [1, 2, 3, 4, 5, 4, 3, 2, 1, 5]
    },
    {
      Name: "Christopher Robin",
      photo: "https://artinsights.com/wp-content/uploads/2013/11/20121013094740.gif" ,
      score: [1, 2, 3, 4, 5, 4, 3, 2, 1, 5]
    }  
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;