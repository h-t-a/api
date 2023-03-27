
INSERT INTO `db_smp`.`pre_order`
(`seller_post_id`,
`buyer_id`,
`qty`,
`unit_price`,
`createdAt`,
`updatedAt`)
VALUES
(?,?,?,?,?,?);

SELECT 
	order.id,
    order.seller_post_id,
    order.buyer_id,
    -- (select buyer_name from tbl_buyer where id=order.buyer_id)as buyer,
    order.qty,
    order.unit_price
FROM pre_order as order;

SELECT po.id,po.qty from pre_order as po;

SELECT SUM(qty*unit_price)as Total_Price FROM pre_order;
