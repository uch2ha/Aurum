"""add network field to crypto holdings

Revision ID: d1a6f4c8b729
Revises: c4e8f61a9d23
Create Date: 2026-09-08 00:00:00.000000

"""

from collections.abc import Sequence

import sqlalchemy as sa

from alembic import op

# revision identifiers, used by Alembic.
revision: str = 'd1a6f4c8b729'
down_revision: str | None = 'c4e8f61a9d23'
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
  op.add_column('crypto_holdings', sa.Column('network', sa.String(length=50), nullable=True))


def downgrade() -> None:
  op.drop_column('crypto_holdings', 'network')
