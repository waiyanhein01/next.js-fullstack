# Learning Next.js

## Special files

- page.tsx
- layout.tsx
- template.tsx
- not-found.tsx
- loading.tsx

### Routing

- Nested Routes
- Dynamic Routes
- Nested Dynamic Routes
- Catch all Segments
- not-found

### Layout

- Nested Layout
- Multiple RootLayout
  If u want to do share ui like header ui want to be use both product and product detail you do `layout.tsx` under product folder

  ```bash
  sample in product folder in app
  ```

### File-colocation

This is mean a folder have own page.tsx if you create other name this folder won't be run like (`product.tsx` instand of `page.tsx`).

### Private Folder

This is use for split code, ui logic and other component what you want. This folder is like that (\_lib or \_folder name).But we are use in `components folder` for split code.

### Params and SearchParams

For giving a URL,

`params` is a promise that resolves to an object containg the dynamic routes parameters(like id)

`searchParams` is a promise that resolves to an object containg the query parameters(like filters and sorting)

`async/await` can not read in "use client" so if you want to do like async process you can use `use()` special function of react and `useParams()` of Next.js build in function

## Usage/Examples

```javascript

// normal way
const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  return <div>ProductDetailPage - {productId}</div>;
};

export default ProductDetailPage;
```

```javascript

// use "use()"
import { use } from "react";

const ProductDetailPage = ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = use(params);
  return <div>ProductDetailPage - {productId}</div>;
};

export default ProductDetailPage;
```

```javascript

"use client";

import { useParams } from "next/navigation";

// use "useParams()"
const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  return <div>ProductDetailPage - {productId}</div>;
};

export default ProductDetailPage;
```

#### Noted : While `page.tsx` has access to both params and searchParams, `layout.tsx` only has access to params

### Navigating Progammatically

`useRouter()`
