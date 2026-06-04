const todolist=[];

function adddetails(){
    let todohtml='';
    for(let i=0;i<todolist.length;i++)
    {
        const todoobj=todolist[i];
        const name=todoobj.name;
        const date=todoobj.date;
        const html=`
        <div class="detail">
                   <div class="div-para-name">
                        <p class="inside-para-name">${name}</p>
                    </div>
                    
                    <div class="div-para-date">
                        <p class="inside-para-date">${date}</p>
                    </div>
                    
                    <div class="div-button">
                        <button 
                            class="inside-button"  
                            onclick="todolist.splice(${i},1)
                            adddetails();">
                                Delete
                        </button>
                    </div>
        </div>`;
        todohtml+=html;
    }
    console.log(todohtml);
    document.querySelector('.tododiv').innerHTML=todohtml;
}
function addList()
{
    const inputElement=document.querySelector('.To-Do-Box');
    const inputElementDate=document.querySelector('.To-Do-Date');
    const name=inputElement.value;
    const date=inputElementDate.value;
    todolist.push({name,date
    });
    console.log(todolist); 
    inputElement.value=' ';
    inputElementDate.value='';
    adddetails();
    
}