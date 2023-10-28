## Components

Chứa các component sử dụng trong dự án

Component được chia làm 3 loại:

- common: các component cơ bản, không chứa logic dự án, được sử dụng ở các component khác

- layouts: các component sử dụng trong layout, ví dụ: header, menu, ...

- pages: các component chỉ được sử dụng trong 1 màn hình cụ thể, có thể chứa logic của màn hình

### Đặt tên

- common components: các component được bắt đầu bằng tiền tố `Hn` (tên mình) theo sau là tên component. Ví dụ `HnInput`, `HnButton`, ...

- layout components: tạo thêm thư mục với tên của layout, component sẽ nằm trong thư mục đó. Tên component bắt đầu bằng `The`. Ví dụ: `TheHeader`, `TheMenu`, ...

- page components: tạo thêm thư mục với tên của màn hình, component sẽ nằm trong thư mục đó. Tên component không có tiền tố cố định, yêu cầu duy nhất là đặt tên với nhiều từ. Ví dụ: `TransactionList`, `TransactionDetail`, ...
