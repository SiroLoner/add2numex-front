Bạn là một senior frontend developer đồng thời có kiến thức về tâm lý và phương pháp dạy toán cho học sinh tiểu học.

Hãy phát triển tính năng “Guided Step-by-Step Addition” cho ứng dụng Add2NumEx. Người sử dụng chính là học sinh cấp 1, vì vậy giao diện cần trực quan, chậm rãi, dễ hiểu và khuyến khích học sinh tự suy nghĩ thay vì chỉ hiển thị đáp án cuối cùng.

Bối cảnh hiện tại:
- Ứng dụng React + TypeScript + Vite.
- Logic tính phép cộng nằm trong src/services/addition.ts.
- Kết quả hiển thị tại src/components/ResultPanel.tsx.
- Các bước cộng hiển thị qua src/components/StepCard.tsx.
- Hỗ trợ đa ngôn ngữ English/Vietnamese trong src/i18n.ts.
- Không làm hỏng API và logic tính toán hiện tại.

Yêu cầu chức năng:

1. Thêm chế độ “Học từng bước”
- Sau khi người dùng nhập hai số và bấm Calculate, không hiển thị toàn bộ lời giải ngay lập tức.
- Hiển thị phép cộng theo cột.
- Chỉ làm nổi bật một cột tại mỗi thời điểm, bắt đầu từ hàng đơn vị bên phải.
- Có nút “Next step”, “Previous step” và “Show answer”.
- Cho phép học sinh quay lại bước trước để xem lại.

2. Hướng dẫn từng bước
Ở mỗi cột:
- Làm nổi bật hai chữ số đang được cộng.
- Hiển thị số nhớ từ bước trước nếu có.
- Đặt câu hỏi ngắn để học sinh suy nghĩ, ví dụ:
  - “What is 7 + 5?”
  - “Don’t forget the carried number.”
  - “What digit should we write?”
- Cho phép học sinh nhập đáp án cho:
  - Tổng tạm thời.
  - Chữ số ghi xuống kết quả.
  - Số nhớ cho cột tiếp theo.
- Không bắt buộc học sinh nhập tất cả nếu UX trở nên quá phức tạp; có thể bắt đầu với chữ số kết quả và số nhớ.

3. Phản hồi sư phạm
- Nếu trả lời đúng:
  - Hiển thị phản hồi tích cực nhưng ngắn gọn.
  - Làm nổi bật kết quả đúng.
  - Cho phép chuyển sang bước kế tiếp.
- Nếu trả lời sai:
  - Không chỉ hiển thị “Wrong”.
  - Đưa ra gợi ý nhỏ, không tiết lộ ngay đáp án.
  - Cho phép thử lại.
  - Có nút “Show hint” và sau một số lần sai có thể cho phép “Show answer”.
- Không tạo cảm giác phạt hoặc gây áp lực cho học sinh.

4. Hiển thị số nhớ
- Số nhớ phải được hiển thị trực quan phía trên cột kế tiếp.
- Có animation nhẹ khi số nhớ được tạo và di chuyển sang cột tiếp theo.
- Số nhớ cần có màu hoặc biểu tượng riêng để học sinh phân biệt với chữ số chính.
- Không dùng animation quá nhanh hoặc gây rối mắt.

5. Luồng hoàn thành
- Khi hoàn tất tất cả các cột:
  - Hiển thị toàn bộ phép tính hoàn chỉnh.
  - Hiển thị lời khen.
  - Hiển thị nút “Try another problem”.
  - Có thể hiển thị tóm tắt các bước học sinh đã thực hiện.
- Không tự động chuyển bước quá nhanh; học sinh phải chủ động bấm tiếp tục.

6. Đa ngôn ngữ
- Tất cả text mới phải được thêm vào dictionary trong src/i18n.ts.
- Hỗ trợ English và Vietnamese.
- Khi đổi ngôn ngữ, không được mất:
  - Hai số đang nhập.
  - Kết quả hiện tại.
  - Bước hiện tại.
  - Tiến trình học sinh.
- Không hard-code text trong component.

7. Responsive và accessibility
- Hoạt động tốt trên desktop, tablet và mobile.
- Các nút có kích thước đủ lớn cho trẻ em.
- Có trạng thái focus rõ ràng.
- Sử dụng aria-label hoặc aria-live cho phản hồi và thay đổi bước.
- Không phụ thuộc chỉ vào màu sắc để truyền đạt đúng/sai.
- Không để nội dung bị xuống dòng hoặc che khuất các chữ số.

8. Kiến trúc và chất lượng code
- Trước khi sửa, hãy đọc và hiểu các component, type và service hiện có.
- Tái sử dụng Calculation và AdditionStep nếu phù hợp.
- Chỉ tạo abstraction mới khi thực sự cần thiết.
- Giữ logic tính toán độc lập với logic hiển thị.
- Không thay đổi API hiện tại.
- Không sửa các phần không liên quan.

9. Kiểm thử
Bổ sung hoặc cập nhật test cho:
- Phép cộng không nhớ.
- Phép cộng có một lần nhớ.
- Phép cộng có nhiều lần nhớ.
- Hai số có độ dài khác nhau.
- Luồng trả lời đúng.
- Luồng trả lời sai rồi thử lại.
- Chuyển ngôn ngữ khi đang ở giữa bài học.
- Hoàn thành toàn bộ các bước.

Tiêu chí hoàn thành:
- Học sinh có thể thực hiện phép cộng từng cột một.
- Học sinh nhìn thấy rõ chữ số đang được xử lý và số nhớ.
- Học sinh nhận được gợi ý khi trả lời sai.
- Không hiển thị toàn bộ đáp án ngay từ đầu trong chế độ học từng bước.
- Có thể chuyển đổi English/Vietnamese trong toàn bộ luồng.
- `npm.cmd run build` chạy thành công.
- Không làm hỏng chức năng nhập số, gọi API và hiển thị kết quả hiện tại.

Sau khi hoàn thành:
1. Tóm tắt các thay đổi.
2. Liệt kê các file đã thay đổi.
3. Mô tả luồng tương tác của học sinh.
4. Chạy build và test.
5. Báo rõ các giới hạn hoặc phần cần cải thiện tiếp theo.