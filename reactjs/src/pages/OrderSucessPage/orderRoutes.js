const handleCancelOrder = (orderId) => {
    fetch(`/api/orders/${orderId}/status`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'Cancelled' }) // Status cần được truyền
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Order cancelled successfully!");
                // Cập nhật lại danh sách đơn hàng nếu cần
            } else {
                alert("Failed to cancel order.");
            }
        })
        .catch(error => console.error('Error:', error));
};
app.post('/api/orders/:orderId/status', (req, res) => {
    const { status } = req.body;  // Lấy trạng thái từ body
    const { orderId } = req.params;

    // Kiểm tra trạng thái là hợp lệ
    if (!['Cancelled', 'Completed'].includes(status)) {
        return res.status(400).json({ success: false, message: 'Invalid status' });
    }

    // Cập nhật trạng thái trong cơ sở dữ liệu
    Order.updateOne({ _id: orderId }, { status })
        .then(() => res.json({ success: true }))
        .catch((error) => res.status(500).json({ success: false, error }));
});

