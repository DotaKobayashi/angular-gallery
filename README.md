# angular-gallery
ng-gallery clone

## use docker
```
docker pull alexsuch/angular-cli:1.2.7

docker run -it -v $(pwd):/app alexsuch/angular-cli:1.2.7 /bin/ash
## container
# cd app/angular-gallery
# npm install

docker run -it --rm -w /app -v $(pwd)/angular-gallery:/app -p 4200:4200 alexsuch/angular-cli:1.2.7 ng serve --host 0.0.0.0
```