// ============================================
// DOM ELEMENTS
// ============================================

const taskForm =
    document.getElementById("taskForm");

const tasksContainer =
    document.getElementById("tasksContainer");

const loadingState =
    document.getElementById("loadingState");

const emptyState =
    document.getElementById("emptyState");

const searchInput =
    document.getElementById("searchInput");

const refreshBtn =
    document.getElementById("refreshBtn");

const taskSummary =
    document.getElementById("taskSummary");

const currentDate =
    document.getElementById("currentDate");


// ============================================
// CREATE TASK ELEMENTS
// ============================================

const taskTitleInput =
    document.getElementById("taskTitle");

const taskDescriptionInput =
    document.getElementById("taskDescription");

const statusInput =
    document.getElementById("status");

const dueDateInput =
    document.getElementById("dueDate");

const isDoneInput =
    document.getElementById("isDone");

const createBtn =
    document.getElementById("createBtn");


// ============================================
// EDIT MODAL ELEMENTS
// ============================================

const editModal =
    document.getElementById("editModal");

const editForm =
    document.getElementById("editForm");

const editTaskId =
    document.getElementById("editTaskId");

const editTaskTitle =
    document.getElementById("editTaskTitle");

const editTaskDescription =
    document.getElementById("editTaskDescription");

const editStatus =
    document.getElementById("editStatus");

const editDueDate =
    document.getElementById("editDueDate");

const editIsDone =
    document.getElementById("editIsDone");

const closeModalBtn =
    document.getElementById("closeModalBtn");

const cancelEditBtn =
    document.getElementById("cancelEditBtn");

const updateBtn =
    document.getElementById("updateBtn");


// ============================================
// TOAST ELEMENTS
// ============================================

const toast =
    document.getElementById("toast");

const toastIcon =
    document.getElementById("toastIcon");

const toastTitle =
    document.getElementById("toastTitle");

const toastMessage =
    document.getElementById("toastMessage");


// ============================================
// FILTER ELEMENTS
// ============================================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const allCount =
    document.getElementById("allCount");

const pendingCount =
    document.getElementById("pendingCount");

const progressCount =
    document.getElementById("progressCount");

const completedCount =
    document.getElementById("completedCount");


// ============================================
// APPLICATION STATE
// ============================================

let allTasks = [];

let activeFilter = "all";


// ============================================
// CURRENT DATE
// ============================================

const showCurrentDate = function () {

    const date = new Date();

    currentDate.textContent =
        date.toLocaleDateString(
            "en-US",
            {
                weekday: "short",
                month: "short",
                day: "numeric"
            }
        );

};


// ============================================
// TOAST
// ============================================

const showToast = function (
    title,
    message,
    type = "success"
) {

    toastTitle.textContent = title;

    toastMessage.textContent = message;

    toastIcon.textContent =
        type === "success"
            ? "✓"
            : "!";


    toast.classList.remove("error");

    if (type === "error") {
        toast.classList.add("error");
    }


    toast.classList.add("show");


    setTimeout(function () {

        toast.classList.remove("show");

    }, 3000);

};


// ============================================
// LOADING STATE
// ============================================

const setLoading = function (isLoading) {

    if (isLoading) {

        loadingState.classList.remove("hidden");

        tasksContainer.classList.add("hidden");

        emptyState.classList.add("hidden");

    } else {

        loadingState.classList.add("hidden");

        tasksContainer.classList.remove("hidden");

    }

};


// ============================================
// READ TASKS
// ============================================

const readTasks = async function () {

    setLoading(true);


    try {

        const response =
            await fetch("/read-task");


        if (!response.ok) {
            throw new Error(
                "Failed to fetch tasks."
            );
        }


        const result =
            await response.json();


        if (!result.success) {
            throw new Error(
                result.message ||
                "Failed to read tasks."
            );
        }


        allTasks = result.data || [];


        updateCounts();

        renderTasks();


    } catch (error) {

        console.error(error);

        tasksContainer.innerHTML = "";

        emptyState.classList.remove("hidden");

        emptyState.querySelector("h3").textContent =
            "Something went wrong";

        emptyState.querySelector("p").textContent =
            "Unable to load your tasks. Please try again.";


        showToast(
            "Error",
            "Could not load tasks.",
            "error"
        );

    } finally {

        setLoading(false);

    }

};


// ============================================
// CREATE TASK
// ============================================

const createTask = async function (event) {

    event.preventDefault();


    const taskData = {

        taskTitle:
            taskTitleInput.value.trim(),

        taskDescription:
            taskDescriptionInput.value.trim(),

        status:
            statusInput.value,

        dueDate:
            dueDateInput.value,

        isDone:
            isDoneInput.checked

    };


    // Completed checkbox হলে
    // status automatically Completed হবে
    if (taskData.isDone) {

        taskData.status = "Completed";

    }


    // Empty title check
    if (!taskData.taskTitle) {

        showToast(
            "Missing title",
            "Please enter a task title.",
            "error"
        );

        taskTitleInput.focus();

        return;

    }


    try {

        createBtn.disabled = true;

        createBtn.innerHTML =
            `<span>Creating...</span>`;


        const response =
            await fetch("/create-task", {

                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body:
                    JSON.stringify(taskData)

            });


        if (!response.ok) {
            throw new Error(
                "Failed to create task."
            );
        }


        const result =
            await response.json();


        if (!result.success) {
            throw new Error(
                result.message ||
                "Failed to create task."
            );
        }


        // Form reset
        taskForm.reset();


        // নতুন task আবার read
        await readTasks();


        showToast(
            "Task created",
            "Your new task has been added."
        );


    } catch (error) {

        console.error(error);

        showToast(
            "Creation failed",
            error.message,
            "error"
        );

    } finally {

        createBtn.disabled = false;

        createBtn.innerHTML =
            `
                <span class="btn-icon">+</span>
                <span>Create Task</span>
            `;

    }

};


// ============================================
// UPDATE TASK
// ============================================

const updateTask = async function (event) {

    event.preventDefault();


    const id =
        editTaskId.value;


    const taskData = {

        taskTitle:
            editTaskTitle.value.trim(),

        taskDescription:
            editTaskDescription.value.trim(),

        status:
            editStatus.value,

        dueDate:
            editDueDate.value,

        isDone:
            editIsDone.checked

    };


    if (taskData.isDone) {

        taskData.status = "Completed";

    }


    if (!taskData.taskTitle) {

        showToast(
            "Missing title",
            "Task title cannot be empty.",
            "error"
        );

        return;

    }


    try {

        updateBtn.disabled = true;

        updateBtn.textContent =
            "Saving...";


        const response =
            await fetch(
                `/update-task/${id}`,
                {

                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(taskData)

                }
            );


        if (!response.ok) {
            throw new Error(
                "Failed to update task."
            );
        }


        const result =
            await response.json();


        if (!result.success) {
            throw new Error(
                result.message ||
                "Failed to update task."
            );
        }


        closeEditModal();


        await readTasks();


        showToast(
            "Task updated",
            "Your changes have been saved."
        );


    } catch (error) {

        console.error(error);

        showToast(
            "Update failed",
            error.message,
            "error"
        );

    } finally {

        updateBtn.disabled = false;

        updateBtn.textContent =
            "Save Changes";

    }

};


// ============================================
// DELETE TASK
// ============================================

const deleteTask = async function (id) {

    const task =
        allTasks.find(
            function (item) {
                return item._id === id;
            }
        );


    const taskName =
        task?.taskTitle || "this task";


    const confirmed =
        window.confirm(
            `Delete "${taskName}"?\n\nThis action cannot be undone.`
        );


    if (!confirmed) {
        return;
    }


    try {

        const response =
            await fetch(
                `/delete-task/${id}`,
                {
                    method: "DELETE"
                }
            );


        if (!response.ok) {
            throw new Error(
                "Failed to delete task."
            );
        }


        const result =
            await response.json();


        if (!result.success) {
            throw new Error(
                result.message ||
                "Failed to delete task."
            );
        }


        await readTasks();


        showToast(
            "Task deleted",
            "The task has been removed."
        );


    } catch (error) {

        console.error(error);

        showToast(
            "Delete failed",
            error.message,
            "error"
        );

    }

};


// ============================================
// OPEN EDIT MODAL
// ============================================

const openEditModal = function (task) {

    editTaskId.value =
        task._id;

    editTaskTitle.value =
        task.taskTitle || "";

    editTaskDescription.value =
        task.taskDescription || "";

    editStatus.value =
        task.status || "Pending";

    editDueDate.value =
        task.dueDate || "";

    editIsDone.checked =
        Boolean(task.isDone);


    editModal.classList.remove("hidden");

    document.body.style.overflow =
        "hidden";


    setTimeout(function () {

        editTaskTitle.focus();

    }, 100);

};


// ============================================
// CLOSE EDIT MODAL
// ============================================

const closeEditModal = function () {

    editModal.classList.add("hidden");

    document.body.style.overflow = "";

};


// ============================================
// UPDATE COUNTS
// ============================================

const updateCounts = function () {

    const pending =
        allTasks.filter(
            function (task) {
                return task.status === "Pending";
            }
        ).length;


    const progress =
        allTasks.filter(
            function (task) {
                return task.status === "In Progress";
            }
        ).length;


    const completed =
        allTasks.filter(
            function (task) {

                return (
                    task.status === "Completed" ||
                    task.isDone === true
                );

            }
        ).length;


    allCount.textContent =
        allTasks.length;

    pendingCount.textContent =
        pending;

    progressCount.textContent =
        progress;

    completedCount.textContent =
        completed;

};


// ============================================
// GET STATUS CLASS
// ============================================

const getStatusClass = function (status) {

    if (status === "Pending") {

        return "pending";

    }


    if (status === "In Progress") {

        return "progress";

    }


    if (status === "Completed") {

        return "completed";

    }


    return "pending";

};


// ============================================
// FILTER TASKS
// ============================================

const getFilteredTasks = function () {

    const searchTerm =
        searchInput.value
            .trim()
            .toLowerCase();


    return allTasks.filter(
        function (task) {

            const matchesFilter =
                activeFilter === "all" ||
                task.status === activeFilter;


            const title =
                task.taskTitle ||
                "";


            const description =
                task.taskDescription ||
                "";


            const matchesSearch =
                title
                    .toLowerCase()
                    .includes(searchTerm) ||

                description
                    .toLowerCase()
                    .includes(searchTerm);


            return (
                matchesFilter &&
                matchesSearch
            );

        }
    );

};


// ============================================
// RENDER TASKS
// ============================================

const renderTasks = function () {

    const filteredTasks =
        getFilteredTasks();


    tasksContainer.innerHTML = "";


    // No tasks
    if (filteredTasks.length === 0) {

        emptyState.classList.remove("hidden");

        taskSummary.textContent =
            "No tasks match your current filter.";

        return;

    }


    emptyState.classList.add("hidden");


    taskSummary.textContent =
        `${filteredTasks.length} ${
            filteredTasks.length === 1
                ? "task"
                : "tasks"
        } found`;


    filteredTasks.forEach(
        function (task) {

            const taskElement =
                createTaskElement(task);


            tasksContainer.appendChild(
                taskElement
            );

        }
    );

};


// ============================================
// CREATE TASK DOM ELEMENT
// ============================================

const createTaskElement = function (task) {

    const article =
        document.createElement("article");


    const status =
        task.status || "Pending";


    const statusClass =
        getStatusClass(status);


    article.className =
        `task-item status-${statusClass}`;


    // Main
    const main =
        document.createElement("div");

    main.className =
        "task-main";


    // Title row
    const titleRow =
        document.createElement("div");

    titleRow.className =
        "task-title-row";


    // Check
    const check =
        document.createElement("span");

    check.className =
        "task-check";


    if (task.isDone) {

        check.classList.add("done");

        check.textContent = "✓";

    }


    // Title
    const title =
        document.createElement("h3");

    title.className =
        "task-title";


    if (task.isDone) {

        title.classList.add("done");

    }


    title.textContent =
        task.taskTitle ||
        "Untitled Task";


    titleRow.appendChild(check);

    titleRow.appendChild(title);


    // Description
    const description =
        document.createElement("p");

    description.className =
        "task-description";


    description.textContent =
        task.taskDescription ||
        "No description provided.";


    // Meta
    const meta =
        document.createElement("div");

    meta.className =
        "task-meta";


    // Status badge
    const statusBadge =
        document.createElement("span");

    statusBadge.className =
        `badge ${statusClass}`;


    statusBadge.textContent =
        status;


    // Date badge
    const dateBadge =
        document.createElement("span");

    dateBadge.className =
        "badge date";


    dateBadge.textContent =
        task.dueDate
            ? `Due: ${formatDate(task.dueDate)}`
            : "No due date";


    meta.appendChild(statusBadge);

    meta.appendChild(dateBadge);


    // Add everything
    main.appendChild(titleRow);

    main.appendChild(description);

    main.appendChild(meta);


    // ========================================
    // ACTION BUTTONS
    // ========================================

    const buttons =
        document.createElement("div");

    buttons.className =
        "task-buttons";


    // Edit button
    const editButton =
        document.createElement("button");

    editButton.type = "button";

    editButton.className =
        "task-btn edit-btn";

    editButton.title =
        "Edit task";

    editButton.textContent =
        "✎";


    editButton.addEventListener(
        "click",
        function () {

            openEditModal(task);

        }
    );


    // Delete button
    const deleteButton =
        document.createElement("button");

    deleteButton.type = "button";

    deleteButton.className =
        "task-btn delete-btn";

    deleteButton.title =
        "Delete task";

    deleteButton.textContent =
        "⌫";


    deleteButton.addEventListener(
        "click",
        function () {

            deleteTask(task._id);

        }
    );


    buttons.appendChild(editButton);

    buttons.appendChild(deleteButton);


    // Article
    article.appendChild(main);

    article.appendChild(buttons);


    return article;

};


// ============================================
// FORMAT DATE
// ============================================

const formatDate = function (dateString) {

    if (!dateString) {
        return "No date";
    }


    const date =
        new Date(
            `${dateString}T00:00:00`
        );


    if (Number.isNaN(date.getTime())) {

        return dateString;

    }


    return date.toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "short",
            day: "numeric"
        }
    );

};


// ============================================
// FILTER BUTTONS
// ============================================

filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                activeFilter =
                    button.dataset.filter;


                renderTasks();

            }
        );

    }
);


// ============================================
// SEARCH
// ============================================

searchInput.addEventListener(
    "input",
    function () {

        renderTasks();

    }
);


// ============================================
// REFRESH
// ============================================

refreshBtn.addEventListener(
    "click",
    async function () {

        refreshBtn.style.transform =
            "rotate(360deg)";


        await readTasks();


        setTimeout(
            function () {

                refreshBtn.style.transform =
                    "";

            },
            300
        );

    }
);


// ============================================
// CREATE FORM
// ============================================

taskForm.addEventListener(
    "submit",
    createTask
);


// ============================================
// EDIT FORM
// ============================================

editForm.addEventListener(
    "submit",
    updateTask
);


// ============================================
// CLOSE MODAL
// ============================================

closeModalBtn.addEventListener(
    "click",
    closeEditModal
);


cancelEditBtn.addEventListener(
    "click",
    closeEditModal
);


// ============================================
// CLICK OUTSIDE MODAL
// ============================================

editModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target === editModal
        ) {

            closeEditModal();

        }

    }
);


// ============================================
// ESC KEY
// ============================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            !editModal.classList.contains("hidden")
        ) {

            closeEditModal();

        }

    }
);


// ============================================
// INITIALIZE APP
// ============================================

showCurrentDate();

readTasks();