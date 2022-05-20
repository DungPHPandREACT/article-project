-Khi gọi API sẽ có 2 trường hợp
	+Gọi API thành công (không có lỗi)
		+API có dữ liệu
		+API không có dữ liệu (làm thêm 1 cái gì đó)
	+Gọi API không thành công
		promise (then) (catch)
		async await
		try {
			//gọi api
		} catch (error){
			console.log(error)
		}
		
	-Promise
	-Async await
	
	-Chạy đồng bộ: chạy theo trình tự từ trên xuống dưới
	-Event loop trong js(đây là 1 kiến thức nâng cao)
	
		
-GET: lấy dữ liệu
-POST: gửi dữ liệu
-PUT: sửa đổi dữ liệu
-DELETE: xóa dữ liệu

-name -> title
-email -> summary
-phone number -> author
-message -> content
-button send -> button post article

-Khi bấm vào button Post article, sẽ lấy được dữ liệu ở các ô input
-Gợi ý: Dùng sự kiện onChange ở các ô input
Thời gian: đến 21h40


-State, props, useEffect

*Props:
	+Dùng để gửi dữ liệu đến component (props read only)
	Component A -> Component B
	+State: giống kho lưu trữ dữ liệu cho các component
			khi state thay đổi thì component sẽ render lại
			
	+Sự khác nhau giữa state và props
			-Props là dùng để truyền dữ liệu từ component này sang component khác
			-Props read only (không thể thay đổi được dữ liệu
			-State: là nơi lưu trữ dữ liệu trong component
			-State có thể thay đổi được giá trị
			
	+useEffect
		-Chạy độc lập 
		-Những lần chạy lại sẽ phụ thuộc vào dependencies
			+useEffect(()=>{ }): không truyền gì vào dependencies thì sẽ chạy lại mỗi khi component render lại
			+useEffect(()=>{ }, []): thì sẽ chạy duy nhất 1 lần, sau khi component render lần đầu tiên
			+useEffect(()=>{ }, [param]): chạy sau khi component render lần đầu tiên và sau mỗi lần param thay đổi giá trị