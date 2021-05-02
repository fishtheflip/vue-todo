<template>
                <div role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Task: {{id}}</h5>
                        
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.{{text}}</p>
                        <strong>04.05.2012{{date}}</strong>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Done</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Edit</button>
                        <button type="button" class="btn btn-warning">Delete</button>
                    </div>
                    </div>
                    <hr/>
                </div>
</template>
<script>
export default {
    name: 'StandartTask'
}
</script>