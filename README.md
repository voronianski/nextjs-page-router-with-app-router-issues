# Next.js AppRouter & PageRouter issues

> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Issues

### AppRouter is not working with [optional catch-all segments in PageRouter](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments)

1. Observe that there's `app/blog/page.tsx` page that should be accessed with http://localhost:3000/en-us/blog/
2. However if you try to access it `pages/[[...slug]].tsx` will be used (other pages from `pages/*` are accessible correctly e.g. http://localhost:3000/en-us/careers/)

Next.js repo discussion - https://github.com/vercel/next.js/discussions/62677

---
