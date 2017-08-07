# Orpheus API docs


## Initiating the Orpheus object

To perform any action, you first need to imitate `new Orpheus` with a `tenant` and `username`:

```javascript
new Orpheus('myTenant', 'myUsername');
```

## Use cases:

### 1. Want to get all projects belonging to user `john`. I am entering through the admin panel.

```javascript
const getAllUserCollections = async () => {
	const orpheus = new Orpheus('admin.orpheus.eu', 'john');
	const projects = await orpheus.user.projects;
    return projects;
};
```

This method returned an array of project objects, on which we can perform other operations - e.g.: edit project details.

We entered the projects through the user object. The API takes care of verifying that the user has correct privileges to perform actions on these projects.

### 2. A user which is not logged in enters a project page called `myMuseum`.

```javascript
const getProject = async () => {
	const orpheus = new Orpheus('admin.orpheus.eu', null);
	const project = await orpheus.tenant.project;
    return project;
};
```

This method returns a project object, n which we can perform other operations - e.g.: get project name.

We have entered the project object through the tenant, so the user is very limited with operations he can perform. In this situation it will usually be only read actions.
