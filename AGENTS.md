# 13-orders-admin — инструкции для агента

Admin orders (Vite + FSD + Redux). Родительский канон: `../AGENTS.md`, спека: `../plans/13-orders-admin.md`.

## Команды

- Установка: `pnpm install` (из корня `portfolio_react`)
- Разработка: `pnpm dev` (порт 5013)
- Проверка: `pnpm check` (= typecheck + test)
- Сборка: `pnpm build`

Только `pnpm`.

## Карта FSD

- `src/app` — store, providers, routing shell
- `src/pages/orders-list`, `src/pages/order-detail`
- `src/widgets/orders-table`
- `src/features/change-order-status`, `filter-orders`, `demo-unauthorized`, `order-ui-state`
- `src/entities/order` — модель, RTK Query API, UI badge
- `src/shared` — ui, mocks, lib, config

## Границы

- Импорты только вниз по FSD. Публичный API слайса — `index.ts`.
- **Серверное состояние — RTK Query** (`ordersApi`). **UI** (фильтр, selected id) — `uiSlice`.
- MSW: `GET/PATCH /api/orders`, demo `POST /api/demo/unauthorized-next`.
- Module Federation: имя `orders`, expose `./App`; federation отключён в `mode === 'test'`.

## Критерий готовности

`pnpm check` зелёный; сценарий из README воспроизводится вручную.
