create table product_profile
(
  product        varchar2 (30) not null,
  userid         varchar2 (30),
  attribute      varchar2 (240),
  scope          varchar2 (240),
  numeric_value  decimal (15,2),
  char_value     varchar2 (240),
  date_value     date,
  long_value     long
);
