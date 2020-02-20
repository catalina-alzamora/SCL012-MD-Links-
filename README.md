# Markdown Links

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.


## 2. Resumen del proyecto

Este proyecto consiste en una herramienta de línea de comando (CLI) en JavaScript, que entrega información sobre el estado de los links en un documento de extensión .md.

La lógica de este programa se observa en el siguiente diagrama:

![Diagrama de flujo](/images/diagrama.png)

## 3. Modo de uso

Instalación:

`npm install catalina-alzamora/md-links`

En terminal escribir el comando 'md-links' y la ruta al archivo. (Tiene que ser de tipo .md)

`md-links <path-to-file>`

A continuación se podrá observar cada link con su texto, href y su estado. En caso de error el link aparecerá en rojo. 


