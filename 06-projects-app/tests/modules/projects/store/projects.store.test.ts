import { useProjectsStore } from "@/modules/projects/store/projects.store";
import { createPinia, setActivePinia } from "pinia";

describe('useProjectsStore', () => {

    beforeEach(() => {
        setActivePinia(createPinia());
        localStorage.clear();
    });

    test('should return default values', () => {
        const {
            noProjects,
            addProject,
            addTaskToProject,
            projectList,
            projects,
            projectsWithCompletion,
            toggleTask,
        } = useProjectsStore();

        expect(noProjects).toBe(true);
        expect(projectList).toEqual([]);
        expect(projects).toEqual([]);
        expect(projectsWithCompletion).toEqual([]);
        
        expect(toggleTask).toBeInstanceOf(Function);
        expect(addProject).toBeInstanceOf(Function);
        expect(addTaskToProject).toBeInstanceOf(Function);
    });
});

