
export const coachingModules = [
    {
        name: 'Introduction to dbt',
        theory: [
            'learn about “dbt approach”',
            'difference between ETL and ETL',
            'how dbt fits into modern data stack',
            'what is possible to do with dbt',
        ],
        practice: [
            'setting up a dev environment',
            'create your first dbt project',
            'run your first dbt command',
        ],
    },
    {
        name: 'dbt foundations',
        theory: [
            'dbt key components',
            'dbt commands',
            'node selection syntax',
            'Jinja templating',
        ],
        practice: [
            'create model, source and seed',
            'practice running dbt commands',
            'learn “ref()” and “source()” macros',
        ],
    },
    {
        name: 'Project structure',
        theory: [
            'common problems with dbt at scale',
            'modeling layers',
            'model conventions',
            'refactoring to best practices',
        ],
        practice: [
            'refactor models to modeling layers',
            'set default materializations strategies',
        ],
    },
    {
        name: 'Testing and documentation',
        theory: [
            'models properties',
            'documenting models',
            'tests in dbt',
            'tests configuration',
        ],
        practice: [
            'create property files',
            'document models and generate docs',
            'write data and freshness tests',
        ],
    },
    {
        name: 'Advanced features',
        theory: [
            'macros and packages',
            'dbt variables',
            'advanved materializations',
            'dbt snapshots',
        ],
        practice: [
            'create a macro',
            'install and try packages',
            'create a model with dbt variable',
        ],
    },

    {
        name: 'Deployment and scaling',
        theory: [
            'code environments',
            'developer experience',
            'CI/CD and SlimCI',
            'scheduling options',
        ],
        practice: [
            'create PR template',
            'add SQL linter and CI pipeline',
            'deploy to Github Actions',
        ],
    },
]


export const coachingRequestForm = "https://docs.google.com/forms/d/e/1FAIpQLSd72bZDvPzwh8qAytY3LbGkpKP12aTGeJeiH5wzRSpD-0UWVg/viewform"
