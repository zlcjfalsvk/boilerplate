use crate::util::generate_uuid;
use uuid::Uuid;

#[test]
fn generate_uuid_test() {
    let uuid = generate_uuid();

    let is_uuid = Uuid::parse_str(&uuid).is_ok();

    assert!(is_uuid)
}
