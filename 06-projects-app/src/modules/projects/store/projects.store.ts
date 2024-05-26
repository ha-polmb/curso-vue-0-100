import { computed, ref } from 'vue'
import type { Project } from '../interfaces/project.interface'
import { defineStore } from 'pinia'
import {v4 as uuidv4} from 'uuid'

const initialLoad = ():Project[] => {
    return [
        {
            id: uuidv4(),
            name: 'Project 1',
            tasks: [],
        },
        {
            id: uuidv4(),
            name: 'Project 2',
            tasks: [],
        }
    ]
}

export const useProjectsStore = defineStore('projects', () => {
    const projects = ref<Project[]>(initialLoad())

    const addProject = (name: string) => {
        if (name.length === 0) return
        projects.value.push({
            id: uuidv4(),
            name: name,
            tasks: [],
        })
    }

    return {
        // properties
        // projects,

        // getters
        projectList: computed(() => [...projects.value]),

        // actions
        addProject,
    }
})