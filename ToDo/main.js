const buttonTask = document.getElementById("button-task")
const input = document.querySelector(".container")
const button = document.getElementById("cansel")
const confirmBtn = document.getElementById("confirmBtn");
const taskContainer = document.getElementById("taskContainer");
const taskInput = document.getElementById("taskInput");

buttonTask.addEventListener("click",()=>{

input.style.display = "block";
})

button.addEventListener("click",()=>{
    input.style.display = "none";
})






confirmBtn.addEventListener("click", () => {
  const taskName = taskInput.value.trim();
  if (taskName === "") {
    alert("Please enter a task name!");
    return;
  }

  const today = new Date();
  const date = today.toISOString().split("T")[0]; // yyyy-mm-dd

  // إنشاء عنصر تاسك جديد
  const task = document.createElement("div");
  task.classList.add("task");
  task.innerHTML = `
    <h2>${taskName}</h2>
    <p>Date of task is: ${date}</p>
    <div class="task-button">
    <button class="done-btn">Done</button>
      <button class="delete-btn">Delet</button>
    </div>`;

  // زر الحذف
  task.querySelector(".delete-btn").addEventListener("click", () => {
    task.remove();
  });

  // زر الإنتهاء
  task.querySelector(".done-btn").addEventListener("click", () => {
    task.style.opacity = "0.6";
    task.style.textDecoration = "line-through";
  });

  // إضافة التاسك إلى الصفحة
  taskContainer.appendChild(task);

  // تنظيف وإغلاق البوب أب
  taskInput.value = "";
  popup.style.display = "none";
});