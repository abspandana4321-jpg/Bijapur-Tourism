
document.getElementById("btn").addEventListener("click",function(){
    document.getElementById("message").textContent="Button Clicked!";
});
document.getElementById("btn").addEventListener("mouseover",function(){
    this.style.backgroundColor="green;"
});
document.getElementById("btn").addEventListener("mouseout",function(){
    this.style.backgroundColor="#007bff";
});
document.getElementById("nameinput").addEventListener("input",function(){
    Document.getElementById("message").textContent="hello",+this.Value;
});