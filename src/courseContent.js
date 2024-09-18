
export const courseModules = [
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
    {
        name: 'Testing and documentation',
        lessons: [
            {title: 'Introduction'},
            {title: 'dbt documentation'},
            {title: 'Testing in dbt'},
            {title: 'Generic tests'},
            {title: 'Singular tests'},
            {title: 'Unit tests'},
            {title: 'Adjusting test configuration'},
            {title: 'Testing data sources'},
        ],
        theory: [
            'types of tests in dbt',
            'test configuration',
            'dbt documentation',
        ],
        practice: [
            'add assertion tests',
            'work with unit tests',
            'creating dbt docs',
        ],
    },
    {
        name: 'Going advanced',
        lessons: [
            {title: 'Introduction'},
            {title: 'Macros'},
            {title: 'Packages'},
            {title: 'Project variables and environment variables'},
            {title: 'Materialization techniques'},
            {title: 'Optimizing performance'},
            {title: 'Snapshots'},
            {title: 'run-operations'},
            {title: 'Hooks'},
            {title: 'dbt build'},
        ],
        theory: [
            'macros and packages',
            'materialization techniques',
            'snapshots',
            'dbt hooks',
        ],
        practice: [
            'create your macro',
            'try different materializations',
            'work with snapshots',
        ],
    },
    {
        name: 'Deployment and scaling',
        lessons: [
            {title: 'Dev vs Prod environments'},
            {title: 'Git flow'},
            {title: 'dbt Cloud'},
            {title: 'Custom schedulers'},
            {title: 'CI/CD'},
            {title: 'Style guide'},
            {title: 'Scaling dbt projects'},
        ],
        theory: [
            'development and staging environments',
            'way to run dbt in production',
            'CI/CD with dbt',
            'scaling dbt projects',
        ],
        practice: [
            'deploy your dbt project to dbt cloud',
            'implement style guide',
            'create CI/CD pipeline',
        ],
    },
]
