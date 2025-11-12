document.addEventListener("DOMContentLoaded", function() {
  const signin = document.getElementById("signin");
  const signup = document.getElementById("signup");

  if (signin) signin.addEventListener("click", function(){
    alert("زر تسجيل الدخول — يمكنك ربطه لاحقًا بصفحة تسجيل الدخول الحقيقية.");
  });

  if (signup) signup.addEventListener("click", function(){
    alert("زر التسجيل — استخدميه لفتح نموذج التسجيل أو تحويل لصفحة أخرى.");
  });
});
