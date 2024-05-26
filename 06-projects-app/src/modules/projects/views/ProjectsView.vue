<template>
    <div class="overflow-x-auto w-full">
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th></th>
                    <th>Proyecto</th>
                    <th>Tareas</th>
                    <th>Avance</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(project, index) in projectsStore.projectList" :key="project.id" class="hover">
                    <th>{{ index + 1 }}</th>
                    <td>{{ project.name }}</td>
                    <td>{{  project.tasks.length }}</td>
                    <td>
                        <progress class="progress progress-primary w-56" value="40" max="100"></progress>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <input-modal 
        :open="modalOpen" 
        @close="() => modalOpen = false"
        @value="projectsStore.addProject"
        placeholder="Ingresa el nombre del proyecto"
        title="Nuevo proyecto"
        subtitle="Dale un nombre único a tu proyecto"
     />

     <custom-modal :open="customModalOpen">
        <template #header>
            <h1 class="text-3xl">Título del modal</h1>
        </template>
        <template #body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </template>
        <template #footer>
            <div class="flex justify-end mt-5">
                <button @click="() => customModalOpen = false" class="btn mr-4">Close</button>
                <button @click="() => customModalOpen = false" class="btn btn-primary">Aceptar</button>
            </div>
        </template>
    </custom-modal>

    <fab-button @click="() => modalOpen = true" position="bottom-right">
        <add-circle />
    </fab-button>

    <fab-button @click="() => customModalOpen = true" position="bottom-left">
        <modal-icon />
    </fab-button>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import FabButton from '@/modules/common/components/FabButton.vue';
    import InputModal from '@/modules/common/components/InputModal.vue';
    import AddCircle from '@/modules/common/icons/AddCircle.vue';
    import CustomModal from '@/modules/common/components/CustomModal.vue';
    import ModalIcon from '@/modules/common/icons/ModalIcon.vue';
    import { useProjectsStore } from '../store/projects.store';

    const modalOpen = ref(false);
    const customModalOpen = ref(false);

    const projectsStore = useProjectsStore();

</script>