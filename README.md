Bibliotecas utilizadas no projeto:

**Axios**: é uma biblioteca de HTTP client utilizada para fazer requisições HTTP a partir de navegadores e Node.js.
	Imports usados: axios.

**@mui/material**: é uma biblioteca de componentes React de código aberto que implementa o Material Design do Google.
        Elementos usados: AppBar, Box, Button, Card, CardContent, CardMedia, Container, CssBaseline, Grid, IconButton, List, ListItem, ListItemText, Menu, MenuIcon (de @mui/icons-material/Menu), MenuItem, Paper, TextField, Toolbar, Typography.

**@mui/system**: é uma biblioteca da Material-UI (MUI) que fornece um conjunto de utilitários de estilo para React.
	Imports usados: styled → para criar componentes com estilos personalizados.

**React**: uma biblioteca JavaScript para criar interfaces de usuário.
        Elementos usados: useEffect → é um hook que permite executar efeitos colaterais em componentes funcionais. (Como chamada de API, alteração no DOM ou atualização de estado).
        useState → é um hook que permite adicionar estado local a componentes funcionais.
	StrictMode → é uma ferramenta para destacar problemas potenciais em uma aplicação React.

**React-router-dom**: é uma biblioteca JS usada em aplicativos React para gerenciar a navegação entre diferentes páginas ou componentes.
	Elementos usados: 
	BrowserRouter → mantém a interface da aplicação sincronizada com a URL do navegador. 
createRoot → criar um contêiner raiz para renderização de uma aplicação React.
Link, Route, Routes, 
useNavigate → que permite navegar programaticamente entre rotas no aplicativo React.
useParams → permite acessar os parâmetros da URL em um componente funcional do React.

**JSON Server**: é uma biblioteca que permite criar rapidamente uma API RESTful fake (simulada) usando apenas um arquivo JSON.


A arquitetura do projeto é modular e em camadas. A aplicação é dividida em módulos independentes, como componentes, páginas e assets. Cada módulo encapsula uma funcionalidade específica.

Estrutura de diretórios do projeto:
**node_modules**: quando o projeto React foi criado e as dependências instaladas usando o npm, essas dependências foram baixadas e armazenadas nesse diretório.

**public**: utilizado para armazenar todos os recursos estáticos da aplicação React acessados diretamente pelo navegador. No projeto, esse diretório contém a imagem jpeg da UNIESP.

**src**: é onde o código-fonte da aplicação está armazenado. Está subdividido em *assets*, *components* e *pages*. Além dessas subdivisões, estão *App.jsx* e *main.jsx*, que são as estruturas básicas do projeto.

**assets**: utilizada para guardar arquivos estáticos. No projeto, contém o arquivo *react.svg*.

**components**: contém os componentes React da aplicação. Um componente pode ser definido como uma função ou uma classe que encapsula uma parte da interface do usuário e possui suas próprias propriedades, estado e comportamentos. No projeto, os dois componentes utilizados foram o *BannerAd*, que é um banner de propaganda, e a *NavBar*, que é uma barra de navegação contendo links para outras páginas da aplicação.

**pages**: cada arquivo dentro desta pasta corresponde normalmente a uma rota específica e contém a lógica e a estrutura para uma determinada página. 
No projeto, temos as páginas *DpoLgpd*, que corresponde a uma página de legislação, *Faculdade*, que apresenta informações sobre a instituição, *Inicial* é a primeira página, com informações gerais, *Notícias*, contém notícias sobre a instituição e *VisualizaNoticia*.
Além dessas, foi criado também a pasta **admin**, usada para agrupar as páginas e componentes específicos para a interface de administração do site. Dentro dela, temos as páginas *AdminNoticias*, *CadastroNoticias* e *EditarNoticia*. 
