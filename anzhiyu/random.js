var posts=["2025/10/17/123/","2025/10/16/hello-world/","2025/10/17/nb/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };