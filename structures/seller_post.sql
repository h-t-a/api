INSERT INTO `db_smp`.`seller_post`
(`seller_id`,
`description`,
`qty`,
`unit_price`)
VALUES
(?,?,?,?,?);

SELECT 
	spt.id,
    spt.seller_id,
    (SELECT seller_name FROM tbl_seller WHERE id = spt.seller_id) as seller,
    spt.description,
    spt.qty,
    spt.unit_price,
    (SELECT seller_profile FROM tbl_seller WHERE id=spt.seller_id)as Profile
FROM seller_post as spt;

SELECT 
    p.id,
    p.seller_id,
    (select seller_name from tbl_seller where id=p.seller_id)as Name,
    p.description,
    (select seller_profile from tbl_seller where id = p.seller_id)as Profile 
FROM seller_post AS p;