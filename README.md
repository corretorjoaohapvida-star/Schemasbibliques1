# Plans de la Bible — página francesa

Site estático pronto para enviar a um repositório Git e publicar em hospedagem estática. Não precisa instalar dependências ou executar um build.

## Estrutura

- `index.html`: página de vendas em francês, na raiz.
- `assets/`: imagens, CSS e fontes locais.
- `.nojekyll`: permite servir os arquivos diretamente no GitHub Pages.
- `.gitignore`: ignora arquivos temporários do sistema.

Extraia o ZIP e envie o conteúdo, mantendo `index.html` e `assets/` juntos na raiz do repositório. Para pré-visualizar localmente, abra `index.html` no navegador. Na hospedagem, selecione a pasta raiz como diretório publicado; não há comando de build.

## Checkouts configurados

| Pacote | Preço na página | Checkout |
| --- | --- | --- |
| Ancien Testament | 7 € | https://pay.hotmart.com/S107908208R?checkoutMode=10 |
| Nouveau Testament | 7 € | https://pay.hotmart.com/N107908260P?checkoutMode=10 |
| Pack complet | 11,99 € | https://pay.hotmart.com/N107908028P?checkoutMode=10 |

Os três botões abrem os respectivos links em uma nova aba. Os preços em euros, a copy e as imagens francesas foram preservados. A associação de cada botão ao pacote e a presença dos arquivos locais foram verificadas. A configuração de preço, moeda e entrega dentro da Hotmart é administrada na Hotmart.

## Rastreamento instalado

- Meta Pixel `2140550059704088`, com inicialização única, evento `PageView` e imagem `noscript`.
- Script oficial de UTMs da UTMify para Hotmart, com `data-utmify-prevent-subids`, `async` e `defer`. Referência: https://utmify.help.center/article/1013-como-instalar-o-script-de-utms-em-minhas-paginas.

O Pixel de Otimização da UTMify é separado e exige o código/ID gerado na conta; ele não foi incluído sem esse dado. Eventos de compra e a integração da Hotmart com a UTMify são configurados nas respectivas plataformas.

O pacote contém a página de vendas e os seus recursos visuais; não contém os PDFs do produto. Os links de contato, política de privacidade, afiliados, avaliações e versão espanhola continuam apontando para os destinos da página de referência.
