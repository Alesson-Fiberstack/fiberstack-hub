# FiberStack Hub v0.3

Plataforma inicial da FiberStack Soluções com homepage, comparador de maquininhas, calculadora de taxas, central de ferramentas e páginas institucionais.

## Executar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validar produção

```bash
npm run build
npm start
```

## Publicar

1. Envie os arquivos para o repositório `fiberstack-hub`.
2. Na Vercel, clique em **Adicionar projeto**.
3. Importe o repositório do GitHub.
4. Mantenha as configurações automáticas e clique em **Deploy**.

## Observação

Antes de divulgar, atualize `siteConfig.url` após a Vercel fornecer a URL definitiva. As taxas e condições comerciais devem ser confirmadas nos sites oficiais.


## v0.2
- Página de oferta da Ton em `/ton`
- Comparador direcionando para a página da Ton

## v0.3
- Componentes reutilizáveis para páginas de maquininhas
- Cards de modelos Ton
- Tabela comparativa responsiva
- FAQ otimizado para decisão de compra
- CTA final reutilizável
