

http://www.litrans.ca

## How to get started

Contributing

### Submitting Content

TODO

### Automated testing

This project uses Netlify for CI/CD. It automatically build and test your code, preventing bugs from being deployed to production. 

When satisfied with the changes, submit a [pull request](https://github.com/LITrans/litrans_web/compare).

## Reporting Issues and suggesting new features

Use the [issue tracker](https://github.com/LITrans/litrans_web/issues) to report the problem. 

It is recommended to open up an [issue tracker](https://github.com/LITrans/litrans_web/issues) to get feedback on your idea before you begin. If you are submitting a complex feature, create a small design proposal on the issue tracker.

## Project Structure
```
.
├── archetypes/        // Preconfigured content templates
├── content/           // Where all site content is stored 
|   ├── news/
|   ├── projects/
|   ├── publications/
|   ├── team/
├── layouts/           // Site HTML layouts 
|   ├── _default/
|   ├── news/
|   |   ├── single.html  // single article page
|   |   ├── list.html  // list pages
|   ├── ...
|   ├── index.html     // The main landing page HTML file
├── static/            // Where all static files live
|   ├── css/           // css files
|   ├── img/           // static img files
|   ├── js/            // js files
|   ├── _redirects     // DNS redirects
└── config.toml        // The Hugo configuration file
```
