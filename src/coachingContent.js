
export const coachingModules = [
    {
        name: 'First steps in dbt',
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
        lessons: [
            {title: 'What is dbt?'},
            {title: 'Why dbt exists and where does it fit?'},
            {title: 'What dbt can do for you'},
            {title: 'Installing dbt'},
            {title: 'Bootstrapping the project'},
        ]
    },
    {
        name: 'Basics of data modeling',
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
            'main building blocks of dbt',
            'dbt commands and their usage',
            'Jinja templating',
            'sources and seeds',
        ],
        practice: [
            'create dbt sources and seeds',
            'run your first dbt models',
            'practice dbt commands',
        ],
    },
    {
        name: 'Data modeling best practices',
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
            'naming conventions',
        ],
        practice: [
            'refactor your models using modeling layers',
            'configuring project defaults',
        ],
    },
]
