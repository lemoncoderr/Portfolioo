const header = document.querySelector("header");

window.addEventListener ("scroll",function() {
    header.classList.toggle ("sticky", window.scrollY >0);
});
let menu = document.querySelection('.mode');
let navlist = document.querySelection('.navlist');

menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');

};

window.onscroll =() =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');

};
function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  }
// Function to scroll to a section when the "Resume" link is clicked
/*function scrollToResume() {
    const resumeSection = document.getElementById("resume"); //  ID of  resume section
    resumeSection.scrollIntoView({ behavior: "smooth" });
  }
  
  // Add a click event listener to the "Resume" link
  const resumeLink = document.querySelector('a.top-btn');
  resumeLink.addEventListener("click", scrollToResume);*/
  /*document.getElementById("resume").addEventListener("click", function() {
    window.location.href = "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=667774979821-1olvv4253mo94onlq7e6aovug0o86m0v.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fportfolio-acb9b.firebaseapp.com%2F__%2Fauth%2Fhandler&state=AMbdmDn4Jce66wWhuSxfv5JYDV6exXNa2YvT_uerT0MSyu6oTW7RgrsASlOkpAYRiDpbCIBxKdKVstZ4JEyA2dItLWBnNkELwymFk332YB2e5IHM89JootLhFtOn5i3EymWvJtNMvWBPN0iO8nP0rkJg8u-TU8bngt8Glf-gxunCABsUV20LQN8S_h18-rbLmTJSdIWrCTSOwTae6HZcDZnmrOcIWPvkSDctBHPBF9MzCF5b_iTkye6v496IVbwbv_QR3HaWqQDbqCu1CAvfaxzplth-EADkZK5gWjfcs_u8rh1-ynw1_pF3b43TemdkhXLVpqj6jGsKOQ&scope=openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20profile&context_uri=http%3A%2F%2F127.0.0.1%3A5502&service=lso&o2v=1&theme=glif&flowName=GeneralOAuthFlow"; // Replace with your desired URL
  });*/
  
  