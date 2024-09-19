
export const coachingModules = [
    {
        name: 'Foundations of dbt',
        lessons: [
            {title: 'What is dbt?'},
            {title: 'Why dbt exists and where does it fit?'},
            {title: 'What dbt can do for you'},
            {title: 'Installing dbt'},
            {title: 'Bootstrapping the project'},
        ],
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
        name: 'Testing and documentation',
        lessons: [
            {title: 'dbt key components'},
            {title: 'dbt models'},
            {title: 'dbt commands'},
            {title: 'Node selection syntax'},
            {title: 'Jinja'},
            {title: 'Sources'},
            {title: 'Seeds'},
            {title: 'Compilation'},
            {title: 'Debugging errors'},
            {title: 'Configuring your project'},
        ],
        theory: [
            'types of tests in dbt',
            'test configuration',
            'dbt documentation',
            'docs customizations',
        ],
        practice: [
            'create dbt tests',
            'add documentation to models',
            'dbt docs',
        ],
    },
    {
        name: 'Best practices and advanced features',
        lessons: [
            {title: 'Best practices'},
            {title: 'Clean DAG'},
            {title: 'Modeling layers'},
            {title: 'Facts and dimensions'},
            {title: 'Naming conventions'},
            {title: 'dbt modeling checklist'},
            {title: 'Refactoring your models'},
        ],
        theory: [
            'best practices of data modeling',
            'modeling layers',
            'macros and packages',
            'materializations',
        ],
        practice: [
            'practice modeling layers',
            'installing and using packages',
            'incremental materialization',
        ],
    },
]

export const coachingRequestForm = "https://docs.google.com/forms/d/e/1FAIpQLSd72bZDvPzwh8qAytY3LbGkpKP12aTGeJeiH5wzRSpD-0UWVg/viewform"
