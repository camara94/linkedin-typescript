# L'essentiel de TypeScript 2
Vous souhaitez améliorer la maîtrise de vos développements JavaScript ? Vous souhaitez en savoir plus sur TypeScript et migrer vers ce langage ? Ce cours est fait pour vous. Elise Patrikainen vous donne les outils indispensables pour réussir vos développements d'applications TypeScript, de A à Z. Étape par étape, vous allez voir comment exploiter le typage statique, maîtriser les étapes de build et de compilation, utiliser des fonctionnalités JavaScript déjà intégrées et structurer votre projet. Ainsi, vous obtiendrez le résultat souhaité, conforme aux standards des librairies et des applications TypeScript.

## définition
![definition du typescript](images/definition.png)

## Pourquoi TypeScript
![pourquoi typescript](images/importance.png)

## Exécution du JavaScript
![execute javascript](images/executionts.png)

## Exécution du TypeScript
![execute typescript](images/exectypescript.png)
## Installation du compilateur TypeScript
![compiler TypeScript](images/compilerts.png)
## Usage de TypeScript
![usage de typescript](images/usagets.png)
## Typage Statique
![typage statique](images/typagestatique.png)
![typage statique](images/typagestatique2.png)

## Typage Dynamique
![typage dynamique](images/typagesdynamique.png)
## Avantage du typage dynamique en Javascript
![avantage dy typage dynaique](images/avantagetypagedynamique.png)
## Avantage du typage static en Javascript
![avantage dy typage static](images/avantagedetypagestatique.png)
## Types Courant en JavaScript
### Types Courants Primitifs
![type courant primitifs 1](images/typecourantprimitif.png)
### Types Courants Objets
![type courant objet 1](images/typecourantobjet.png)
![type courant objet 1](images/typecourantobjet2.png)
## Créer des types en TypeScript
![créer des type en ts](images/creertypests.png)
### Les Interfaces
![interfaces](images/interface.png)
### Les classes 
![classe 1](images/classe1.png)
![classe 2](images/classe.png)

### Différence entre classe et interface
![difference](images/differencentreclasseetinterface.png)

## Gulp 
Gulp permet d'automatiser les projets javascripts
![gulp](images/gulp.png)
### Structure d'un projet Gulp
![structure d'un projet gulp](images/strugulp.png)

## Initialisation du projet Gulp
![init gulp projet](images/initgulpprojet.png)
### Typescript et gulp-typescript
![ts et gulp](images/installts.png)
### Configuration de gulp
pour configurer gulp, je vous redirige vers ce repo [configuration de gulb](https://github.com/ivogabe/gulp-typescript#basic-usage) et vous copiez la première section vous l'adaptez comme suit:
<code>
    <pre>
        var gulp = require('gulp');
        var ts = require('gulp-typescript');

        gulp.task('default', function () {
            return gulp.src('src/main.ts')
                .pipe(ts({
                    noImplicitAny: true,
                    outFile: 'main.js'
                }))
                .pipe(gulp.dest('dist'));
        });
</pre>
</code>

## Pour Créer un bundle 
On doit dabord créer un fichier **html** générelement nommé **index.hml** qui contiendra **bundle.js**
et ensuite, on aura besoin de ces trois dependances<br/>
<code>npm install --save-dev browserify tsify vinyl-source-stream</code>