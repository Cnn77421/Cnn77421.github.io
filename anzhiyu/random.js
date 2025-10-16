var posts=["2025/10/16/hello-world/","2025/10/16/test/","2025/10/09/测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };