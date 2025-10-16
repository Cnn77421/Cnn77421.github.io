var posts=["2025/10/16/hello-world/","2025/10/16/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };