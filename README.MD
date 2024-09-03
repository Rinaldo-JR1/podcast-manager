# Podcast Manager

## Descrição

App ao estilo netflix, aonde possa centralizar diferentes episódio podcast separados por categoria

### Domínio

Podcasts feitos em video

## Features

- Listar os podcasts em sessões de categorias

  - [Exemplos: Saúde, fitness, mentalidade, humor]

  #### Como

  - Retornar em uma api rest o nome do podcast, nome do episódio, imagem de capa e o link

  ```json
  [
    {
    "podcastName": "flow",
    "episode": "TECNOLOGIA E IA [+ FABIO AKITA]",
    "cover": "https://i.ytimg.com/vi/--slRywdonM/hqdefault.jpg",
    link: "https://www.youtube.com/live/--slRywdonM?si=a-O0Nzt1Z_L0F28F",
    "videoId":"--slRywdonM",
    "category"["tecnologia","IA"]
    }
  ]
  ```

- Filtrar episódios por nome de podcast
