ngBraveSchools App for SmartAdmin AngularJS
==============---==========================

Development
-----------
To run the code in your development environment:

1. Run `git clone --recursive git@bitbucket.org:sizeof/angular-brave-schools.git angular-brave-schools`
2. Run `npm install`
3. Run `gulp` for watch changes in code

For develop module on local

1. Run `bower link` on component directory
2. Go to the app root directory and run `bower link angular-brave-schools`
3. Run `gulp test` for karma tests

Production
----------
To build minified version:

1. Run `gulp dist`
2. Add files to repo `git add .`
3. Commit changes `git commit -m "Message"`
3. Make tag version `git tag -a x.y.z`
4. Push version to git `git push --tags`

Configuration
-------------

You can use `BraveSchoolsProvider` to set some module parameters like base apiUrl, templates. E.g:

```

    angular.module('your-module', ['brave.schools']
      .config(function (BraveSchoolsProvider, APP_CONFIG) {
      
        // Set base api url
        BraveSchoolsProvider.setApiUrl(APP_CONFIG.apiUrl);
        
        // Set config for docs module
        BraveSchoolsProvider.setTemplates({
            index: 'bower_components/angular-brave-schools/src/templates/schools.html',
            list: 'bower_components/angular-brave-schools/src/templates/schools-list.html',
            detail: 'bower_components/angular-brave-schools/src/templates/schools-detail.html'
        });
        
    ....
      
```
