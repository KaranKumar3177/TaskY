const taskData = document.querySelector(".task__container");
console.log(taskData);

const saveChanges = () => {
    const gettingData = {
        id : `${Date.now}`,
        taskUrl : document.getElementById("basic-url").value,  /* we use value in getElementById to get exact values as it is, without any additional info */
        tasktitle : document.getElementById("taskTitle").value,
        tasktype : document.getElementById("taskType").value,
        taskdescription : document.getElementById("taskDescription").value
    };

    

    const newCard = `


  

    <div class="col-sm-12 col-md-6 col-lg-4 id=${gettingData.id}">
      <div class="card">

        <div class="card-header d-flex justify-content-end gap-2"> <!--for aligning pencil and trash buttons on right side we use d-flex and justify content property-->
          <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pencil-alt"></i></button>
<button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash-alt"></i></button>
          </div>

        <div class="card-body">
          <img src=${gettingData.taskUrl} class="card-img-top" alt="...">
          <h5 class="card-title fw-bold text-primary mt-2">${gettingData.tasktitle}</h5>
          <p class="card-text">${gettingData.taskdescription}</p>
          <a href="#" class="btn btn-primary">${gettingData.tasktype}</a>
        </div>
      </div>
    </div>

 
`;

taskData.insertAdjacentHTML("beforeend", newCard);

    };