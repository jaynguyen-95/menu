# Vegas Club – iPad Menu

Web app menu cho iPad (style Landscape Glass) dùng tại Vegas Club: nhân viên nhập số thẻ thành viên, app mở các menu theo hạng thẻ, khách xem món bằng hình lớn và nhân viên gọi món gửi sang hệ thống order.

## Tính năng

- **Menu theo hạng thẻ** (P → EC): VIP, Club, Snack, Outside restaurant, Wine, Drinks, Liquors.
- **Dùng chung (Treat):** mở menu hạng cao hơn khi khách được thành viên hạng cao treat hoặc quản lý duyệt; đơn ghi rõ ai treat.
- **5 ngôn ngữ:** Tiếng Việt, English, 한국어, 中文, 日本語 – mỗi thẻ chỉ hiện một ngôn ngữ.
- **Icon thành phần** (bò, heo, gà, cá, hải sản, trứng, sữa, gluten, đậu nành, hạt, nấm, chay, cồn, độ cay 1–3); rượu vang có thang hương vị và gợi ý kết hợp.
- **Gọi món:** ghi chú từng món, tên nhân viên, khu vực và số bàn / số máy của khách.
- **Hết món:** món hết tự mờ đi và không thể thêm vào đơn.
- **Kết nối API** với hệ thống order (tra thành viên, tình trạng món, gửi đơn) – xem [docs/API.md](docs/API.md).

## Chạy thử

Không cần build. Mở `index.html` qua một web server bất kỳ, ví dụ:

```bash
python3 -m http.server 8080
# mở http://localhost:8080 trên trình duyệt hoặc iPad cùng mạng
```

Ở chế độ **Demo**, dùng thẻ thử `100001` (P), `100002` (I), `100003` (V), `100004` (ONE), `100005` (ONE SIG), `100006` (EC).

Trên iPad: mở bằng Safari → Chia sẻ → **Thêm vào MH chính** để chạy toàn màn hình như app.

## Triển khai

- **GitHub Pages (bản demo):** repo có sẵn workflow `.github/workflows/pages.yml`. Vào *Settings → Pages → Source: GitHub Actions*, sau đó mỗi lần push lên `main` sẽ tự deploy.
- **Máy chủ nội bộ (bản dùng thật):** chép toàn bộ thư mục lên web server cùng mạng với hệ thống order, rồi bật kết nối trong ⚙ của app. API cần cho phép CORS từ địa chỉ đặt app.

## Cấu trúc

| Đường dẫn | Nội dung |
| --- | --- |
| `index.html` | Toàn bộ giao diện và logic (HTML/CSS/JS thuần) |
| `data.js` | Danh mục, món, bản dịch, icon, phân quyền theo hạng, dữ liệu demo |
| `img/<id>.jpg` | Ảnh món đã cắt vuông, chỉ còn món (800×800) |
| `img/vegas-white.png` | Logo VEGAS (trắng) |
| `docs/API.md` | Hợp đồng API với hệ thống order, phân quyền, cách thêm món |

## Lưu ý

- Các món đánh dấu **MẪU** (Snack, Outside restaurant, Drinks, Liquors) là dữ liệu giả – thay bằng món thật trong `data.js`.
- Bản dịch tiếng Việt / tiếng Nhật và các icon dị ứng cần bếp hoặc F&B xác nhận lại.
- Logo và ảnh món là tài sản của Vegas Club; nên để repo ở chế độ **Private**.
