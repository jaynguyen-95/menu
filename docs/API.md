# Vegas Club – iPad Menu: cài đặt & kết nối API

## Gói này gồm

| File | Vai trò |
| --- | --- |
| `index.html` | App (mở bằng Safari trên iPad → Chia sẻ → **Thêm vào MH chính** để chạy toàn màn hình) |
| `data.js` | Danh mục món: tên 5 ngôn ngữ (VI/EN/KO/ZH/JA), icon thành phần, hạng thẻ được dùng, ảnh |
| `img/<id>.jpg` | Ảnh món đã cắt vuông, chỉ còn món ăn (800×800) |

Chép cả thư mục lên một máy chủ web nội bộ (cùng mạng với hệ thống order) rồi mở `https://<máy-chủ>/index.html` trên iPad.

## Bật kết nối hệ thống order

Trong app: biểu tượng ⚙ → **Kết nối: Hệ thống order** → nhập **Địa chỉ API** (vd. `https://order.vegasclub.local/api/v1`) và **API key** → **Kiểm tra kết nối** → **Lưu**.
Ở chế độ **Demo**, app dùng thẻ demo 100001–100006 và đơn được giả lập.

Mọi request gửi header `Authorization: Bearer <API key>` và `Content-Type: application/json`.
Máy chủ API cần cho phép CORS từ địa chỉ đặt app (hoặc đặt app cùng domain với API).

### 1. Tra cứu thành viên

`GET /members/{memberNo}`

```json
{ "memberNo": "100003", "name": "Kim Min-jun", "tier": "V" }
```

`tier` là một trong: `P, I, I+, V, V+, V SIG, ONE, ONE+, ONE SIG, EC`. Trả `404` nếu không có thành viên.
Cũng dùng cho mục **Dùng chung (Treat)** khi nhập thẻ của thành viên chủ.

### 2. Tình trạng món (còn / hết)

`GET /menu/availability` — app gọi khi mở phiên và lặp lại mỗi 30 giây (chỉnh trong ⚙).

```json
{ "items": [
  { "id": "vip-nha-trang-lobster", "available": false },
  { "id": "club-k1", "available": true, "price": 0 }
]}
```

`id` khớp với `id` trong `data.js`. Món `available: false` sẽ mờ đi, hiện "Tạm hết" và không thể thêm vào đơn.

### 3. Gửi đơn

`POST /orders`

```json
{
  "clientOrderId": "ipad-lz3k9a-x7f2",
  "createdAt": "2026-10-20T09:41:00.000Z",
  "source": "ipad-menu",
  "language": "ko",
  "member": { "memberNo": "100003", "name": "Kim Min-jun", "tier": "V" },
  "treat": { "type": "manager", "memberNo": null, "name": null, "tier": "ONE", "approvedBy": "Mr. Park" },
  "staff": { "name": "Minh Thư" },
  "location": { "area": "slot", "areaName": "Slot floor", "seat": "M-1024" },
  "note": "",
  "items": [
    { "id": "club-k1", "name": "Galbi Tang", "category": "club", "qty": 1, "note": "ít hành", "viaTreat": false },
    { "id": "vip-kagoshima-japanese-wagyu", "name": "Kagoshima Japanese Wagyu", "category": "vip", "qty": 1, "note": "", "viaTreat": true }
  ]
}
```

- `treat` = `null` khi không dùng chung. `type: "member"` khi treat bằng thẻ thành viên chủ (`memberNo`, `name`), `"manager"` khi quản lý duyệt (`approvedBy`).
- `viaTreat: true` đánh dấu món thuộc menu chỉ mở được nhờ treat.
- `location.area`: `slot | table | vip | bar | lounge | smoking`.

Phản hồi:

```json
{ "orderNo": "VG-4218", "status": "received" }
```

## Phân quyền menu theo hạng (sửa trong `data.js` → `CATEGORIES.minTier`)

| Menu | Hạng tối thiểu |
| --- | --- |
| Ăn nhẹ (Snack), Đồ uống (Drinks) | P |
| Club | I |
| Rượu vang (Wine) | V |
| VIP, Nhà hàng ngoài, Rượu mạnh (Liquors) | ONE |

## Thêm / sửa món

Thêm một dòng `item(...)` trong `data.js` (tên 5 ngôn ngữ, mô tả, icon thành phần: `beef pork chicken fish shellfish egg dairy gluten soy nuts mushroom veg alcohol`, độ cay `spicy: 1–3`), đặt ảnh vuông chỉ có món, không chữ: `img/<id>.jpg` (800×800).
Các món đánh dấu **MẪU** (Snack, Nhà hàng ngoài, Đồ uống, Rượu mạnh) là dữ liệu giả, cần thay bằng món thật.
